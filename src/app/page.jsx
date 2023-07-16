import Features from "@/components/Features";
import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[100vh] flex lg:justify-bteween justify-center items-center gap-20 px-10 py-3 md:flex-col lg:flex-row bg-gradient-to-r from-green-300 to-blue-500">
        <div className="flex-1 flex-col justify-center items-center px-5 gap-5 ">
          <h1 className="text-3xl text-slate-600 font-bold capitalize py-3 text-center">
            online contact list store
          </h1>
          <p className="text-slate-600 font-normal text-2xl leading-8 ">
            An online contact list store is a website or application that allows
            users to store their contact information in a central location. This
            can be helpful for people who want to keep track of their contacts,
            but do not want to have to carry around a physical contact book.
          </p>
          <div className="flex items-center justify-center bg-blue-500 mx-auto mt-14 text-slate-100 text-2xl font-bold text-center border max-w-fit px-3 py-1 rounded-md hover:bg-blue-300 hover:text-slate-500">
            <Link href={"/register"}> Get Started !</Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/contacts2.jpg"
            alt="contact list image"
            width={1400}
            height={500}
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center items-center text-2xl font-bold text-slate-800 mb-10">
          Features
        </div>
        <Features />
      </div>
      <div className="m-10 px-10 py-4 flex flex-col gap-1 bg-gradient-to-r from-green-300 to-blue-500">
        <div className="flex lg:justify-bteween justify-center items-center gap-20  py-3 md:flex-col lg:flex-row">
          <div className="flex-1">
            <Image
              src="/contacts1.jpg"
              alt="contact list image"
              width={1400}
              height={500}
            />
          </div>
          <div className="flex-1 flex-col justify-center items-center px-5 gap-5 ">
            <p className="text-slate-600 font-normal text-lg leading-8 ">
              Online contact list stores can be a convenient way to store and
              manage your contact information. They can also be a valuable tool
              for businesses that need to track customer contact information.
            </p>
            <h1 className="flex justify-center items-center text-xl underline">
              Here are some of the benefits of using an online contact list
              store:
            </h1>
            <ul>
              <li>
                <b>Convenience: </b>
                <span>
                  Online contact list stores make it easy to access your contact
                  information from anywhere. You can access your contacts from
                  your computer, tablet, or smartphone
                </span>
              </li>
              <li>
                <b>Security : </b>
                <span>
                  Online contact list stores typically offer a high level of
                  security. Your contact information is encrypted and stored on
                  secure servers.
                </span>
              </li>
              <li>
                <b> Collaboration: </b>
                <span>
                  Online contact list stores can be used to collaborate with
                  others. You can share your contact list with other users, and
                  you can also view the contact lists of other users.
                </span>
              </li>
              <li>
                <b>Integration: </b>
                <span>
                  Online contact list stores can be integrated with other
                  applications, such as email and CRM software. This makes it
                  easy to keep your contact information up-to-date and to track
                  your interactions with your contacts.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-slate-600 font-normal text-2xl leading-8 ">
          If you are looking for a convenient and secure way to store your
          contact information, then an online contact list store is a good
          option. There are many different online contact list stores available,
          so you can choose one that meets your needs.
        </p>
        <div className="flex items-center justify-center bg-blue-400 mx-auto m-14 text-slate-100 text-2xl font-bold text-center max-w-fit px-3 py-1 rounded-md hover:bg-blue-300 hover:text-slate-500">
          <Link href={"/auth/register"}> Get Started !</Link>
        </div>
      </div>
    </div>
  );
}
