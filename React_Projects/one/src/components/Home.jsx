import React from 'react'
import vg from "../assets/2.webp";
const Home = () => {
    return (
        <>
            <div className='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problem</p>
                </main>

            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We pride ourselves as the ultimate 
                        solution to the daily technological 
                        challenges you encounter. Our company 
                        stands out as a leading tech giant 
                        with a core objective of improving 
                        children's problem-solving abilities.
                    </p>
                </div>
            </div>

            <div className="home3">
                <div>
                    <h1>Who We Are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Placeat, veniam sequi 
                        assumenda blanditiis est repellat, illum 
                        commodi, laboriosam iure illo eligendi 
                        unde error. Autem aliquam aliquid optio
                        nulla eum tempore?
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ipsum dolor ad est 
                        provident id iure sint nobis facilis 
                        sapiente aut exercitationem dolorum, 
                        placeat accusantium eaque animi ducimus, 
                        qui rerum doloribus.
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Est voluptatem nostrum 
                        quo veniam, quisquam dignissimos debitis 
                        praesentium repellendus libero blanditiis 
                        voluptatum recusandae distinctio non 
                        quia laborum corporis voluptates, corrupti nulla?
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;