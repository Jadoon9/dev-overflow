import React from "react";

interface Album {
  userId: number;
  id: number;
  title: string;
}

const page = async ({ params }: { params: { id: string } }) => {
  const fetchAlbums = async (): Promise<Album[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const data: Album[] = await res.json();
    return data;
  };

  const albums = await fetchAlbums();

  return (
    <div className="flex flex-col gap-4">
      {albums?.map((album: Album) => (
        <div key={album.id}>{album.title}</div>
      ))}
    </div>
  );
};

export default page;
