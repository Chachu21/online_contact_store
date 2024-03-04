import React from "react";
import { TiPlus, TiExport, TiUpload } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";

const Features = () => {
  const features = [
    {
      name: "Add, edit, and delete contacts",
      description:
        "Easily add, edit, and delete contacts from your online contact list.",
      icon: <TiPlus color="blue" size={80} />,
    },
    {
      name: "Search for contacts",
      description:
        "Quickly search for contacts by name, email, or phone number.",
      icon: <BsSearch color="blue" size={80} />,
    },
    {
      name: "Export contacts",
      description:
        "Export your contacts to a CSV file so you can easily share them with others.",
      icon: <TiExport color="blue" size={80} />,
    },
    {
      name: "Import contacts",
      description:
        "Import contacts from a CSV file so you can easily add them to your online contact list.",
      icon: <TiUpload color="blue" size={80} />,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 px-4 mb-10 ">
      {features.map((feature, index) => (
        <div
          key={index}
          className="border bg-slate-300 border-slate-300 rounded shadow-xl p-4 flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-2 items-center mb-2">
            {feature.icon}
            <h4 className="text-center text-xl font-semibold">
              {feature.name}
            </h4>
          </div>
          <p className="text-gray-500 ">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
