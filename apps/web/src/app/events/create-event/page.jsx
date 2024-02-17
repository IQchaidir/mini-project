'use client';

import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [tittle, settittle] = useState('');
  const [img, setimg] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', tittle);
    console.log([...formData]);

    try {
      const response = await axios.post(
        'http://localhost:8000/events/create-event',
        formData, // Convert the URLSearchParams object to a string
      );

      if (response.status === 201) {
        console.log(succses);
      } else {
        console.log(gagal);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log;
  return (
    <div className="bg-[#9c9cc0]">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto rounded-xl mb-10 mt-10 ">
        <h2 className="text-2xl font-bold text-center ">Make Your Own Event</h2>
        <p className="my-4 opacity-70 text-center">
          Adipisicing elit. Quibusdam magnam sed ipsam deleniti debitis
          laboriosam praesentium dolorum doloremque beata.
        </p>
        <hr className="my-6" />
        <form action={handleSubmit}>
          <div className="flex items-center mb-5">
            <label
              className="inline-block w-20 mr-6 text-left
              font-bold text-gray-600"
            >
              Tittle
            </label>
            <input
              value={tittle}
              onChange={(e) => settittle(e.target.value)}
              type="text"
              id="name"
              placeholder="Tittle"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
               text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          {/* <div>
            <div className="flex items-center mb-5">
              <label
                className=" w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 w-[540px] border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <label
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    class="relative cursor-pointer bg-white border py-1 px-1 border-[#555486] rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span class="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                      onChange={(e) => {
                        handleImageChange(e);
                      }}
                    />
                  </label> */}
          {/* <p class="pl-1 text-[#555486]">or drag and drop</p>
                  <p class="text-xs text-[#555486]">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="text-right">
            <button
              type="submit"
              className="py-3 px-8 bg-[#555486] hover:bg-blue-500 text-white font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;
