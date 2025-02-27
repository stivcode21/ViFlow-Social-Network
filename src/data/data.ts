export interface PostType {
  id: number;
  img?: string;
  name: string;
  post: string;
  time: string;
  amountLike?: number;
  amountComments?: number;
  amountRepost?: number;
  comments?: CommentType[];
  follow?: boolean;
}

export interface CommentType {
  id: number;
  img?: string;
  name: string;
  post: string;
  time: string;
  liked?: boolean;
}

const NewPost: PostType[] = [];

const PostData: PostType[] = [
  {
    id: 1,
    img: "https://www.stivcode.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdata-shop-f5bf3.appspot.com%2Fo%2FimgPortfolio%252Flogo.webp%3Falt%3Dmedia%26token%3Dc5b081ed-dc7f-4607-95fb-2b1eb4734400&w=750&q=75",
    name: "Stivcode21",
    post: "Hola busco gente para charlar",
    time: "2 minutos",
    amountLike: 21,
    amountComments: 3,
    amountRepost: 1,
    comments: [
      {
        id: 1,
        img: "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000",
        name: "Messi",
        post: "Que miras bobo!",
        time: "10 minutos",
        liked: false,
      },
      {
        id: 2,
        img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8B70/production/_102469653_gettyimages-962792890.jpg.webp",
        name: "Cr7",
        post: "SSiiiiuuuuUUUUU",
        time: "8 horas",
        liked: false,
      },
      {
        id: 3,
        img: "https://tmssl.akamaized.net/images/foto/galerie/kylian-mbappe-real-madrid-2024-25-presentation-1721130438-142555.jpg",
        name: "Mbappe",
        post: "hala Madrid",
        time: "5 horas",
        liked: false,
      },
    ],
  },
  {
    id: 2,
    img: "https://seeklogo.com/images/G/goku-symbol-logo-C40151C42B-seeklogo.com.png",
    name: "Darek132",
    post: "Parcheseee!",
    time: "1 hora",
    amountLike: 12,
    amountRepost: 2,
    comments: [],
  },
  {
    id: 3,
    img: "https://www.mundodeportivo.com/files/content_image_mobile_filter/uploads/2022/02/01/61f9024874f45.jpeg",
    name: "Luis Díaz",
    post: "Preparándome para el próximo partido!",
    time: "10 minutos",
    amountLike: 34,
    amountRepost: 3,
    comments: [],
  },
  {
    id: 4,
    img: "https://caracoltv.brightspotcdn.com/dims4/default/6740d61/2147483647/strip/true/crop/1312x967+0+0/resize/624x460!/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fgol%2Ffalcao_garcia_colombia_230420_cole.jpg",
    name: "Falcao",
    post: "Entrenamiento duro hoy. ¡Vamos con todo!",
    time: "15 minutos",
    amountLike: 45,
    amountRepost: 5,
    comments: [],
  },
  {
    id: 5,
    img: "https://i.pinimg.com/736x/86/17/9d/86179d3c627d8524ca41d20472a785c1.jpg",
    name: "James Rodríguez",
    post: "Contento de estar de vuelta en el campo. #VamosEquipo",
    time: "20 minutos",
    amountLike: 50,
    amountRepost: 6,
    comments: [],
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    name: "Cristiano Ronaldo",
    post: "¡Gran victoria hoy! Gracias a todos por el apoyo.",
    time: "30 minutos",
    amountLike: 100,
    amountRepost: 10,
    comments: [],
  },
  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    name: "Cristiano Ronaldo",
    post: "¡Gran victoria hoy! Gracias a todos por el apoyo.",
    time: "30 minutos",
    amountLike: 100,
    amountRepost: 10,
    comments: [],
  },
];

//añadir comentario
export const addCommentToPost = (postId: number, comment: CommentType) => {
  const post =
    PostData.find((post) => post.id === postId) ||
    NewPost.find((post) => post.id === postId);
  if (post) {
    comment.id = post.comments ? post.comments.length + 1 : 1;
    post.comments = post.comments ? [...post.comments, comment] : [comment];
    post.amountComments = post.comments && post.comments.length;
  }
};

//añadir post
export const addToPost = (post: PostType) => {
  if (!post) return;

  // Asignar un ID único al post basado en la cantidad de posts existentes
  const newPostId = NewPost.length > 0 ? NewPost[NewPost.length - 1].id + 1 : 1;
  post.id = newPostId;

  // Agregar al array de posts
  NewPost.push(post);
};

export { PostData, NewPost };
