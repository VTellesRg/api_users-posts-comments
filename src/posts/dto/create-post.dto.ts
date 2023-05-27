export class CreatePostDto {
    user: string;
    post_date: string;
    description: string;
    likes: number;
    comments?: string[];
    url_imagem?: string;

}
