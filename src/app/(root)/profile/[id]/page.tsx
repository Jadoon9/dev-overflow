import React from "react";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

const ProfilePage = ({ params }: ProfilePageProps) => {
  const { id } = params;
  return <div>ProfilePage {id}</div>;
};

export default ProfilePage;
