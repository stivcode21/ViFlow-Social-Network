export interface PostType {
  img?: string;
  name: string;
  post: string;
  time: string;
  amountLike?: number;
  amountComments?: number;
  amountRepost?: number;
}

const PostData: PostType[] = [
  {
    img: "https://www.stivcode.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdata-shop-f5bf3.appspot.com%2Fo%2FimgPortfolio%252Flogo.webp%3Falt%3Dmedia%26token%3Dc5b081ed-dc7f-4607-95fb-2b1eb4734400&w=750&q=75",
    name: "Stivcode21",
    post: "Hola busco gente para charlar",
    time: "2 minutos",
    amountLike: 21,
    amountComments: 4,
    amountRepost: 1,
  },
  {
    img: "https://seeklogo.com/images/G/goku-symbol-logo-C40151C42B-seeklogo.com.png",
    name: "Darek132",
    post: "Hola soy Darek",
    time: "1 hora",
    amountLike: 12,
    amountComments: 10,
    amountRepost: 2,
  },
  {
    name: "pepito",
    post: "El pepe",
    time: "20 minutos",
    amountLike: 1,
    amountComments: 1,
  },
];

export default PostData;
