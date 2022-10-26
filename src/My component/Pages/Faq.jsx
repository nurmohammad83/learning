import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold mb-2 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Why HTML is used?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              HTML is the language for describing the structure of Web pages.
              HTML gives authors the means to: Publish online documents with
              headings, text, tables, lists, photos, etc. Retrieve online
              information via hypertext links, at the click of a button.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What are the advantages of CSS ?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Advantages are:
              <li>Bandwidth</li>
              <li>Site-wide consistency</li>
              <li>Page reformatting</li>
              <li>Accessibility</li>
              <li>Content separated from presentation</li>
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is a variable?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Variables are used to store data that will be used in the program.
              It can point to different values such as numbers, strings, arrays,
              objects, and functions.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
