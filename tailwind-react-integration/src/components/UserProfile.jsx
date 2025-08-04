
import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm-400 mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" class="rounded-full w-150 h-150 mx-auto" />
      <h1 class="tex-xl text-blue-800 my-4">John Doe</h1>
      <p class="tex-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;