import React from "react";
// import { TiPlus, TiSearch, TiDownload, TiUpload } from "react-icons/ti";
const Features = () => {
  const features = [
    {
      name: "Add, edit, and delete contacts",
      description:
        "Easily add, edit, and delete contacts from your online contact list.",
    //   icon: <TiPlus />,
    },
    {
      name: "Search for contacts",
      description:
        "Quickly search for contacts by name, email, or phone number.",
    //   icon: <TiSearch />,
    },
    {
      name: "Export contacts",
      description:
        "Export your contacts to a CSV file so you can easily share them with others.",
    //   icon: <TiDownload />,
    },
    {
      name: "Import contacts",
      description:
        "Import contacts from a CSV file so you can easily add them to your online contact list.",
    //   icon: <TiUpload />,
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-8 px-4 mb-10 ">
      {features.map((feature, index) => (
        <div
          key={feature.index}
          className="border bg-slate-300 border-slate-300 rounded shadow-xl p-4 flex flex-col justify-center items-center"
        >
          <div className="flex items-center mb-2">
            {/* {feature.icon} */}
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
