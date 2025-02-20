const NewPost: React.FC = () => {
  return (
    <header className="px-6 mt-2 py-4 border-b border-style flex items-center w-full gap-2">
      <img
        src="/userPreviu.webp"
        alt="logo"
        className="w-9 h-9 object-contain rounded-full"
      />
      <input
        type="text"
        placeholder="¿Qué novedades tienes?"
        className="w-full p-2 text-white font-extralight text-sm outline-none"
      />
      <button className="px-6 py-2 border border-style rounded-xl shadow button-theme">
        Publicar
      </button>
    </header>
  );
};

export default NewPost;
