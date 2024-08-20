import React from "react";

function App() {
    const Data = async () => {
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    };

    Data();

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
}

export default App;
