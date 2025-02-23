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
}

export interface CommentType {
  id: number;
  img?: string;
  name: string;
  post: string;
  time: string;
}

const PostData: PostType[] = [
  {
    id: 1,
    img: "https://www.stivcode.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdata-shop-f5bf3.appspot.com%2Fo%2FimgPortfolio%252Flogo.webp%3Falt%3Dmedia%26token%3Dc5b081ed-dc7f-4607-95fb-2b1eb4734400&w=750&q=75",
    name: "Stivcode21",
    post: "Hola busco gente para charlar",
    time: "2 minutos",
    amountLike: 21,
    amountComments: 4,
    amountRepost: 1,
    comments: [
      {
        id: 1,
        img: "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000",
        name: "Messi",
        post: "Que miras bobo!",
        time: "10 minutos",
      },
      {
        id: 2,
        img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8B70/production/_102469653_gettyimages-962792890.jpg.webp",
        name: "Cr7",
        post: "SSiiiiuuuuUUUUU",
        time: "8 horas",
      },
      {
        id: 3,
        img: "https://tmssl.akamaized.net/images/foto/galerie/kylian-mbappe-real-madrid-2024-25-presentation-1721130438-142555.jpg",
        name: "Mbappe",
        post: "hala Madrid",
        time: "5 horas",
      },
      {
        id: 1,
        img: "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000",
        name: "Messi",
        post: "Que miras bobo!",
        time: "10 minutos",
      },
      {
        id: 2,
        img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8B70/production/_102469653_gettyimages-962792890.jpg.webp",
        name: "Cr7",
        post: "SSiiiiuuuuUUUUU",
        time: "8 horas",
      },
      {
        id: 3,
        img: "https://tmssl.akamaized.net/images/foto/galerie/kylian-mbappe-real-madrid-2024-25-presentation-1721130438-142555.jpg",
        name: "Mbappe",
        post: "hala Madrid",
        time: "5 horas",
      },
    ],
  },
  {
    id: 2,
    img: "https://seeklogo.com/images/G/goku-symbol-logo-C40151C42B-seeklogo.com.png",
    name: "Darek132",
    post: "Hola soy Darek",
    time: "1 hora",
    amountLike: 12,
    amountComments: 10,
    amountRepost: 2,
    comments: [],
  },
  {
    id: 3,
    name: "pepito",
    post: "El pepe",
    time: "20 minutos",
    amountLike: 1,
    amountComments: 1,
    comments: [],
  },
];

//añadir comentario
export const addCommentToPost = (postId: number, comment: CommentType) => {
  const post = PostData.find((post) => post.id === postId);
  if (post) {
    comment.id = post.comments ? post.comments.length + 1 : 1;
    post.comments = post.comments ? [...post.comments, comment] : [comment];
  }
};

export { PostData };
