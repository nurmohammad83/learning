import React from "react";

const Blog = () => {
  return (
    <div className="m-3">
      <section className="p2">
        <h1 className="text-lg font-medium">1. What is cors?</h1>
        <p className="p-3">
          Cross-origin resource sharing (CORS) is a browser security feature
          that restricts cross-origin HTTP requests that are initiated from
          scripts running in the browser. If your REST API's resources receive
          non-simple cross-origin HTTP requests, you need to enable CORS
          support.
        </p>
      </section>
      <section className="p2">
        <h1 className="text-lg font-medium">2. Why are you using firebase?</h1>
        <p className="p-3">
        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
        </p>
      </section>
      <section className="p2">
        <h1 className="text-lg font-medium">3. How does the private route work?</h1>
        <p className="p-3">
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
        </p>
      </section>
      <section className="p2">
        <h1 className="text-lg font-medium">4.1. What is Node?</h1>
        <p className="p-3">
        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
      </section>
      <section className="p2">
        <h1 className="text-lg font-medium">4.2. How does Node work?</h1>
        <p className="p-3">
        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        </p>
      </section>
    </div>
  );
};

export default Blog;
