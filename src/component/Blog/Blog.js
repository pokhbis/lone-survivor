import React from 'react';
import './Blog.css';
import imageA from '../../Images/blog/things-to-know.jpg';
import imageB from '../../Images/blog/necessary-things.jpg';
import imageC from '../../Images/blog/physical-fitness.jpg';
import imageD from '../../Images/blog/upsoming-event.jpg';
const Blog = () => {
    return (
        <div>
            <h2 className="text-center pt-3">Get Latest Updates From Our Blog !</h2>
            <div className="blog-container container py-5">

                <div className="blog-section">
                    <img className="blog-img" src={imageA} alt="" />
                    <h3 className="text-center">Things Need to Know</h3>
                    <p>For adventure training,A few days before a trip, begin a list on paper or your phone. Write down items that are needed and obscure: passport, maps, sunglasses, hat, lip balm, water bottle, a book for the plane, etc. Keep the running list close at hand and add to it as things pop into your head.</p>
                    <button className="btn">Details</button>
                </div>
                <div className="blog-section">
                    <img className="blog-img" src={imageB} alt="" />
                    <h3 className="text-center">Necessary Instruments</h3>
                    <p>Necessary things are things that may not be vital to our preferences but important for our existence important for our existence. To sum it up they are food, clothing and shelter. Without any of the three we will have trouble living the Keep the running list close normal life or even living at all.</p>
                    <button className="btn">Details</button>
                </div>
                <div className="blog-section">
                    <img className="blog-img" src={imageC} alt="" />
                    <h3 className="text-center">Physical Fitness</h3>
                    <p>Whether you’re going to trek through thick Amazonian jungle, head out on a Vespa tour around Spain, snorkel a shipwreck in Bali or climb a glacier in Iceland, you want to start your adventure with the confidence that you will enjoy it – and that involves being strong enough to overcome any challenges that appear along the way.</p>
                    <button className="btn">Details</button>
                </div>
                <div className="blog-section">
                    <img className="blog-img" src={imageD} alt="" />
                    <h3 className="text-center">Upcoming Training Camp</h3>
                    <p>To celebrate the birth centenary of the father of the nation, Bangabandhu Sheikh Mujibur Rahman and on the occasion mountain-based adventure sports activities, The Ministry of Chittagong Hill Tracts Affairs, Chittagong Hill Tracts Development Board,are going to organize "Bangabandhu Tour de CHT MTB Challenge 2021".</p>
                    <button className="btn">Details</button>
                </div>
            </div>
        </div>

    );
};

export default Blog;