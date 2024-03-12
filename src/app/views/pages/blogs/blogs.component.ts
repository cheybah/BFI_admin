import{BlogService} from'./blogService';
import { Component, ViewChild, ElementRef } from '@angular/core';

interface Blog {
  id: number;
  blog_title: string;
  blog_description: string;
  blog_photo: string;
}
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  @ViewChild('blogPhotoInput') blogPhotoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('blogTitleInput') blogTitleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('blogDescriptionInput') blogDescriptionInput!: ElementRef<HTMLTextAreaElement>;

  blogs: Blog[] | undefined;

  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
  //  console.log('ngOnInit triggered.');
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogService.getAllBlogs()
      .subscribe(
        (blogs: Blog[]) => {
          this.blogs = blogs.map(blog => ({
            ...blog,
            blog_photo: `assets/img/blog/${blog.blog_photo}` // Mettez à jour le chemin d'accès à l'image ici
          }));
        },
        error => console.error('Error fetching blogs:', error)
      );
}
createBlog(): void {
  // Récupérer le fichier image sélectionné
  const fileInput = this.blogPhotoInput.nativeElement;
  const selectedFile = fileInput.files?.[0];
  
  // Récupérer le titre et la description du blog à partir des variables de référence du modèle
  const blogTitle = this.blogTitleInput.nativeElement.value;
  const blogDescription = this.blogDescriptionInput.nativeElement.value;
  
  // Créer un nouvel objet Blog avec les valeurs récupérées
  const newBlog: Blog = {
    id: 0, // Vous devrez attribuer un identifiant approprié
    blog_title: blogTitle,
    blog_description: blogDescription,
    blog_photo: selectedFile ? selectedFile.name : '' // Utilisez le nom du fichier comme chemin d'accès pour l'instant
  };
  
  // Appeler la méthode addBlog du service pour ajouter le nouveau blog
  this.blogService.addBlog(newBlog).subscribe(
    (blog: Blog) => {
      console.log('Blog créé:', blog);
      // Actualiser la liste des blogs après la création d'un nouveau
      this.getAllBlogs();
    },
    error => console.error('Erreur lors de la création du blog:', error)
  );
}

}
