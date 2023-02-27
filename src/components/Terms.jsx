import React from "react";

function Terms(props) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-80 flex justify-center items-center">
      <div className="relative p-8 w-full max-w-2xl bg-white border border-black">
        <h1 className="text-base font-bold">
          <span className="text-primary">{"</Terms"}</span>
          {" & Agreement/>"}
        </h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          doloremque modi tempora suscipit eligendi debitis nemo quidem et
          voluptatem numquam molestias dicta cum eveniet, qui eos sequi porro
          alias obcaecati ullam aperiam repudiandae sed, magni ipsam! Libero
          facilis corporis necessitatibus doloremque blanditiis sapiente
          explicabo excepturi qui dignissimos sequi amet a impedit laudantium
          beatae, provident similique! Nostrum, molestias. Repellendus enim
          architecto mollitia suscipit quod maiores tempore libero cum
          exercitationem atque consectetur officiis asperiores culpa, repellat
          doloremque vitae? Natus dolor consectetur asperiores aut laudantium
          totam perferendis fuga minima, dolores iure consequatur et, nemo
          necessitatibus optio non illum omnis quibusdam sequi debitis cum.
        </p>
        <button
          className="absolute bottom-0 left-0 right-0"
          onClick={() => props.setTrigger(false)}
        >
          Accept
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Terms;
