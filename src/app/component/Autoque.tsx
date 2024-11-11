"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoIosPlay } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { BiSolidToTop } from "react-icons/bi";
import { IoIosPause } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const Autoque = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);
    const [fontSize, setFontSize] = useState<number>(18);
    const [scrollSpeed, setScrollSpeed] = useState<number>(40);
    const [cols, setCols] = useState<number>(30);
    useEffect(() => {
        // Function to handle screen size change
        const handleResize = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                // Large screen (e.g., md and up)
                setCols(70);
            } else {
                // Small screen (e.g., sm)
                setCols(35);
            }
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleScroll = () => {
        if (textareaRef.current) {
            if (scrollInterval) {
                clearInterval(scrollInterval);
            }

            const interval = setInterval(() => {
                if (textareaRef.current) {
                    textareaRef.current.scrollTop += 1;

                    if (textareaRef.current.scrollTop >= textareaRef.current.scrollHeight - textareaRef.current.clientHeight) {
                        clearInterval(interval);
                        setScrollInterval(null);
                    }
                }
            }, scrollSpeed); // Adjust speed here
            setScrollInterval(interval);
        }
    };

    // Function to stop scrolling
    const stopScroll = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            setScrollInterval(null);
        }
    };
    const setCursorPosition = (position: number) => {
        if (textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.setSelectionRange(position, position);
        }
    };
    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 2); // Increase font size by 2px
    };

    const decreaseFontSize = () => {
        setFontSize(prevSize => (prevSize > 8 ? prevSize - 2 : prevSize)); // Decrease font size by 2px, minimum of 8px
    };
    const increaseScrollSpeed = () => {
        setScrollSpeed(prevSpeed => (prevSpeed > 10 ? prevSpeed - 10 : prevSpeed)); // Decrease delay to increase speed, min 10ms
    };

    const decreaseScrollSpeed = () => {
        setScrollSpeed(prevSpeed => prevSpeed + 10); // Increase delay to decrease speed
    };
    const scrollToTop = () => {
        if (textareaRef.current) {
            textareaRef.current.scrollTop = 0; // Scroll to the top
        }
    };
    useEffect(() => {
        setCursorPosition(0);
    }, []);
    return (
        <div className='flex flex-col items-center justify-center'>
         
            <textarea className='textarea-sm md:textarea-lg p-10'
                ref={textareaRef}
                rows={15}
                cols={cols}
                style={{ overflow: 'auto', fontSize: `${fontSize}px` }}
                defaultValue={`
খালেদা জিয়ার ১০ বছরের সাজা স্থগিত

প্রধান উপদেষ্টা আজারবাইজান সফরে যাচ্ছেন আজ

গাজা ও লেবাননে ইসরায়েলের বিমান হামলা, শতাধিক নিহত

নির্বাচনে ভরাডুবির জন্য বাইডেনকে দায়ী করলেন ন্যান্সি
এবং
শারজাহ মাঠে প্রথমবার জয় পেল বাংলাদেশ

আসসালামুয়ালাইকুম, আমি . . . . . আমন্ত্রণ জানাচ্ছি এনটিভির রাতের খবরে, 
শুনছিলেন ন্যাশনাল ব্যাংক শিরোনাম, এবার পুরো খবর।

জিয়া অরফানেজ ট্রাস্ট দুর্নীতি মামলায় ১০ বছরের সাজার বিরুদ্ধে বিএনপি চেয়ারপারসন খালেদা জিয়ার লিভ টু আপিল মঞ্জুর করেছেন আপিল বিভাগ। 
একইসঙ্গে এই মামলায় দেওয়া খালেদা জিয়ার ১০ বছরের সাজা স্থগিত করা হয়েছে।
সোমবার আপিল বিভাগের জ্যেষ্ঠ বিচারপতি মো. আশফাকুল ইসলামের নেতৃত্বে তিন বিচারপতির বেঞ্চ এ আদেশ দেন। 
বিস্তারিত জানাচ্ছেন শাওন হাসনাত . . .


কপ-২৯ জলবায়ু সম্মেলনে যোগ দিতে আজ আজারবাইজান সফরে যাচ্ছেন অন্তর্বর্তীকালীন সরকারের প্রধান উপদেষ্টা অধ্যাপক ড. মুহাম্মদ ইউনূস। 
আজ সোমবার বাংলাদেশ বিমানের একটি ফ্লাইটে ঢাকা ত্যাগ করবেন তিনি। 
প্রধান উপদেষ্টার প্রেস সচিব শফিকুল আলম এ তথ্য নিশ্চিত করেছেন।
তিনি বলেন, ‘জলবায়ু সম্মেলনে যোগ দিতে প্রধান উপদেষ্টা ১১ থেকে ১৪ নভেম্বর আজারবাইজানে রাষ্ট্রীয় সফর করবেন।’ 
প্রেস সচিব জানান, এই সফরে প্রধান উপদেষ্টা অত্যন্ত ব্যস্ত সময় পার করবেন।
জলবায়ু ঝুঁকিপূর্ণ দেশগুলোর মধ্যে অন্যতম বাংলাদেশ বাকুতে নিজেদের দাবি-দাওয়া এবং জলবায়ু পরিবর্তনের কারণে বাংলাদেশ যে ক্ষতির সম্মুখীন হচ্ছে- সেসব বিষয় তিনি বিশ্ববাসীর কাছে তুলে ধরবেন।


ফিলিস্তিনের অবরুদ্ধ গাজা ভূখণ্ড ও লেবাননজুড়ে ভয়াবহ বিমান হামলা চালিয়েছে ইসরায়েল। এতে শতাধিক মানুষ নিহত হয়েছেন।
এর মধ্যে গাজায় নিহত হয়েছেন অর্ধশতাধিক ফিলিস্তিনি।
অন্যদিকে লেবাননজুড়ে নিহত হয়েছেন আরও ৫৩ জন। শুক্রবার এই তথ্য জানিয়েছে সংবাদমাধ্যম আল জাজিরা।
সংবাদমাধ্যমটি বলছে, গাজা জুড়ে ইসরায়েলি বিমান হামলায় ৫০ জনেরও বেশি ফিলিস্তিনি নিহত হয়েছেন বলে মেডিকেল সূত্র আল জাজিরাকে জানিয়েছে।
এর মধ্যে গাজার অবরুদ্ধ উত্তরাঞ্চলেই নিহত হয়েছেন কমপক্ষে ৪২ জন।


যুক্তরাষ্ট্রের প্রেসিডেন্ট নির্বাচনে ডেমোক্রেটিক পার্টির পরাজয়ের জন্য জো বাইডেনকে দায়ী  করেছেন, প্রতিনিধি পরিষদের সাবেক স্পিকার ন্যান্সি পেলোসি।
তিনি বলেছেন, প্রেসিডেন্ট জো বাইডেন যদি নির্বাচন থেকে আগেই সরে দাঁড়াতেন, তাহলে ডেমোক্রেটিক পার্টি প্রতিযোগিতার মাধ্যমে প্রার্থী বাছাই করতে পারত।
নিউইয়র্ক টাইমসের উদ্ধৃতি দিয়ে ওয়াশিংটন থেকে এএফপি এ খবর জানিয়েছে।
নিউইয়র্ক টাইমসকে দেয়া এক সাক্ষাৎকারে পেলোসি বলেন, প্রেসিডেন্ট বাইডেন নির্বাচন থেকে আগে সরে দাঁড়ালে নির্বাচনে প্রতিদ্বন্দ্বিতার জন্য আরও প্রার্থী থাকতে পারতো।


সংযুক্ত আরব আমিরাতের শারজাহ ক্রিকেট স্টেডিয়ামে প্রথমবারের মত জয়ের দেখা পেল বাংলাদেশ।
১৯৯০ সাল থেকে শারজাহর মাঠে ৬টি ওয়ানডে ও ৩টি টি-টোয়েন্টি খেললেও কখন জিততে পারেনি টাইগাররা।
অবশেষে আফগানদের বিপক্ষে শারজাহর মাঠে জয় সূচনা করলো নাজমুল হোসেন শান্তর দল।
ব্যাটার-বোলারদের নৈপুন্যে আফগানিস্তানের বিপক্ষে তিন ম্যাচ ওয়ানডে সিরিজে সমতায় ফিরলো বাংলাদেশ।
সিরিজের দ্বিতীয় ওয়ানডেতে আফগানদের বড় ব্যবধানে হারিয়েছে টাইগাররা।
এই জয়ে সিরিজে ১-১ সমতা বিরাজ করছে। সমতা ফিরিয়ে সিরিজ জয়ের সম্ভাবনাও ধরে রেখেছে শান্তর দল।

এই ছিল রাতের খবর, সাথে থাকার জন্য ধন্যবাদ। পরবর্তী খবর রাত 10 টায়, দেখার আমন্ত্রণ রইল, আল্লাহ হাফেজ।
`}
            ></textarea>
            <div className="flex items-center justify-center gap-3 p-2 mt-2">
                <button className='btn btn-ghost btn-circle btn-outline btn-xs text-primary' onClick={scrollToTop}><BiSolidToTop size={20} /></button>
                <button className='btn btn-ghost btn-outline btn-circle text-success btn-xs' onClick={handleScroll}><IoIosPlay size={20} /></button>
                <button className='btn btn-ghost btn-outline btn-circle text-success btn-xs' onClick={stopScroll}><IoIosPause size={18} /></button>
                <button className='btn btn-ghost btn-outline btn-xs btn-circle text-info font-bold' onClick={increaseFontSize}>A+</button>
                <button className='btn btn-ghost btn-outline btn-xs btn-circle text-info font-bold' onClick={decreaseFontSize}>A-</button>
                <button className='btn btn-ghost btn-outline btn-circle text-accent btn-xs' onClick={increaseScrollSpeed}><FaPlus size={14} /></button>
                <button className='btn btn-ghost btn-outline btn-circle text-accent btn-xs' onClick={decreaseScrollSpeed}><FaMinus size={14} /></button>
            </div>
           
        </div>
    )
}
export default Autoque