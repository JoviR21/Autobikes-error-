"use client"

import { useState, useEffect, ReactNode } from "react";
import { createClient, Entry } from "contentful";
import { TypeProductCardSkeleton } from "@/src/contentful/types";

import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";

import Link from "next/link";
import Image from 'next/image';

import BtnProduct from "@/components/BtnProduct";
import ButtonCtg from "@/components/ButtonCtg";
import ButtonSlider from "@/components/ButtonSlider";

export default function Home() {

    const [collection, setCollection] = useState<
        Entry<TypeProductCardSkeleton>[]
    >([])

    useEffect(() => {
        async function getData() {
            try {
                const client = createClient({
                    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
                    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
                });
                const response = await client.getEntries<TypeProductCardSkeleton>({
                    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_PRODUCT || "",
                });

                setCollection(response.items)

            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    console.log(collection)

    return (
        <main>
            {/* Carousel */}
            <section>
                <div className="carousel w-full h-full">
                    <div id="item1" className="carousel-item w-full relative">
                        <Image
                            src="/Carousel-1.webp"
                            width={2880}
                            height={1100}
                            alt="Carousel-1"
                            className="w-full h-full"
                            loading="lazy"
                        />
                        <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
                            <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                                <span className="text-third">Indonesia</span> Motorcycles
                                Dealers
                            </h3>
                            <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                                Get your dream bike in <br />
                                <span className="text-third font-quicksand font-bold">
                                    Autobikes.ID
                                </span>
                            </h2>
                            <ButtonSlider />
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full relative">
                        <Image
                            src="/Carousel-2.webp"
                            width={2880}
                            height={1100}
                            alt="Carousel-2"
                            className="w-full h-full"
                            loading="lazy"
                        />
                        <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
                            <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                                <span className="text-third">Indonesia</span> Motorcycles
                                Dealers
                            </h3>
                            <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                                Get your dream bike in <br />
                                <span className="text-third font-quicksand font-bold">
                                    Autobikes.ID
                                </span>
                            </h2>
                            <ButtonSlider />
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full relative">
                        <Image
                            src="/Carousel-3.webp"
                            width={2880}
                            height={1100}
                            alt="Carousel-3"
                            className="w-full h-full"
                            loading="lazy"
                        />
                        <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
                            <h3 className="hidden sm:block text-sm sm:text-2xl font-montserrat font-semibold mb-3 capitalize">
                                <span className="text-third">Indonesia</span> Motorcycles
                                Dealers
                            </h3>
                            <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 lg:mb-20 capitalize">
                                Get your dream bike in <br />
                                <span className="text-third font-quicksand font-bold">
                                    Autobikes.ID
                                </span>
                            </h2>
                            <ButtonSlider />
                        </div>
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 mt-[-1.8rem] sm:mt-[-2.5rem] flex items-start gap-2">
                    <a href="#item1" className="btn btn-xs">
                        1
                    </a>
                    <a href="#item2" className="btn btn-xs">
                        2
                    </a>
                    <a href="#item3" className="btn btn-xs">
                        3
                    </a>
                </div>
            </section>
            {/* Carousel */}

            {/* Category */}
            <section>
                <section className="category w-full h-full py-10">
                    <div className="head flex content-center items-center mx-3 md:mx-0">
                        <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'>Explore By <span className='text-third'>Models</span></h1>
                        <Link href="/motorcycles" className="text-sm md:text-base md:text-end font-cousine font-bold ms-auto md:me-5 flex">Explore all<BsArrowUpRightCircle className="ms-2" /></Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-3 gap-5 place-items-center">
                        <div className="card image-full w-40 sm:w-52 shadow-xl">
                            <figure>
                                <Image
                                    src="/Adventure.png"
                                    width={170}
                                    height={210}
                                    alt="Adventure Category"
                                    className='w-full h-full'
                                    loading='lazy'
                                />
                            </figure>
                            <div className="card-body mt-auto">
                                <h2 className="card-title">Adventure</h2>
                                <div className="card-actions justify-start">
                                    <ButtonCtg />
                                </div>
                            </div>
                        </div>
                        <div className="card image-full w-40 sm:w-52 shadow-xl">
                            <figure>
                                <Image
                                    src="/Custom.png"
                                    width={170}
                                    height={210}
                                    alt="Custom Category"
                                    className='w-full h-full'
                                    loading='lazy'
                                />
                            </figure>
                            <div className="card-body mt-auto">
                                <h2 className="card-title">Custom</h2>
                                <div className="card-actions justify-start">
                                    <ButtonCtg />
                                </div>
                            </div>
                        </div>
                        <div className="card image-full w-40 sm:w-52 shadow-xl">
                            <figure>
                                <Image
                                    src="/Trails.png"
                                    width={170}
                                    height={210}
                                    alt="Trails Category"
                                    className='w-full h-full'
                                    loading='lazy'
                                />
                            </figure>
                            <div className="card-body mt-auto">
                                <h2 className="card-title">Trails</h2>
                                <div className="card-actions justify-start">
                                    <ButtonCtg />
                                </div>
                            </div>
                        </div>
                        <div className="card image-full w-40 sm:w-52 shadow-xl">
                            <figure>
                                <Image
                                    src="/Sport.png"
                                    width={170}
                                    height={210}
                                    alt="Sport Category"
                                    className='w-full h-full'
                                    loading='lazy'
                                />
                            </figure>
                            <div className="card-body mt-auto">
                                <h2 className="card-title">Sport</h2>
                                <div className="card-actions justify-start">
                                    <ButtonCtg />
                                </div>
                            </div>
                        </div>
                        <div className="card image-full w-40 sm:w-52 shadow-xl">
                            <figure>
                                <Image
                                    src="/Touring.png"
                                    width={170}
                                    height={210}
                                    alt="Touring Category"
                                    className='w-full h-full'
                                    loading='lazy'
                                />
                            </figure>
                            <div className="card-body mt-auto">
                                <h2 className="card-title">Touring</h2>
                                <div className="card-actions justify-start">
                                    <ButtonCtg />
                                </div>
                            </div>
                        </div>
                        <div className="card image-full w-40 sm:w-52 shadow-xl">
                            <figure>
                                <Image
                                    src="/Naked.png"
                                    width={170}
                                    height={210}
                                    alt="Naked Category"
                                    className='w-full h-full'
                                    loading='lazy'
                                />
                            </figure>
                            <div className="card-body mt-auto">
                                <h2 className="card-title">Naked</h2>
                                <div className="card-actions justify-start">
                                    <ButtonCtg />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* Category */}

            {/* Services */}
            <section className="service w-full h-full py-10 bg-secondary">
                <div className="head flex content-center mx-3 md:mx-0">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>Why</span> Choose Us?</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-5 place-items-center">
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><MdOutlineVerifiedUser /> Trusted Motorcycle Importer</h2>
                            <p className="font-montserrat">With over 300 happy customers since 2012, we are the top choice for motorcycle imports.</p>
                        </div>
                    </div>
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><IoMdCheckmarkCircleOutline /> Complete Import Services</h2>
                            <p className="font-montserrat">We handle all paperwork and invoices for your CBU motorcycle import needs.</p>
                        </div>
                    </div>
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><FaHandshake /> Expert Motorcycle Care</h2>
                            <p className="font-montserrat">With over 65 specialized workshops, your motorcycle is in the hands of experts.</p>
                        </div>
                    </div>
                    <div className="card w-80 h-full shadow-lg hover:shadow-xl hover:translate-y-[-12px] transition-all ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title font-cousine font-bold"><Ri24HoursFill /> 24/7 Customer Support</h2>
                            <p className="font-montserrat">Our dedicated customer service team is available 24/7 to assist you with any questions or concerns.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services */}

            {/* Featured Product */}
            {/* Product */}
            <article className="product w-full h-full py-10">
                <div className="head flex content-center mx-3 md:mx-0 mb-2">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>All Models</span> Motorcycles</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-5 place-items-center">
                    {collection.map(item => {
                        const thumbnail = item.fields.thumbnail as {
                            fields: {
                                file: {
                                    url: string;
                                    details: { image: { width: number; height: number } };
                                };
                            };
                        };

                        return <div className="card bg-base-100 w-72 sm:w-80 h-full shadow-xl" key={item.sys.id}>
                            <figure>
                                <Image
                                    src={`https:${thumbnail.fields.file.url}`}
                                    width={270}
                                    height={170}
                                    alt={item.fields.nameProduct as string}
                                    className='w-full h-full'
                                    loading='lazy' />
                            </figure>
                            <div className="card-body">
                                <Link className="flex h-full flex-col" href={`/motorcycles/${item.fields.slug}`}>
                                    <div>
                                        <div className="card-title flex">
                                            <h2 className="text-start font-cousine hover:text-third">{item.fields.nameProduct as ReactNode}</h2>
                                            <h2 className="ms-auto badge badge-outline text-third font-cousine">{item.fields.tags as ReactNode}</h2>
                                        </div>
                                        <div className="mb-5 font-montserrat font-medium">
                                            <p>{item.fields.shortDesc as ReactNode}</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-start mt-auto">
                                        <BtnProduct />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </article>
            {/* Product */}
            {/* <article className="featured-product w-full h-full py-10">
                <div className="head flex content-center mx-3 md:mx-0 mb-2">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>Top-Rates</span> Motorcycles</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-5 place-items-center">
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                </div>
            </article> */}
            {/* Featured Product */}

            {/* Testimonials */}
            <section className="testimonials w-full h-full py-10 bg-primary">
                <div className="head flex content-center mx-3 md:mx-0 mb-2">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>What</span> people say about us...</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7">
                    <div className="card bg-base-100 w-64 md:w-80 lg:w-96 h-full shadow-xl">
                        <div className="card-body">
                            <div className="profile mx-auto">
                                <Image src="/Profile-Testi.png" width={65} height={65} alt="User" className="rounded-full mx-auto" />
                                <h2 className="card-title font-overpass font-semibold capitalize text-center mt-2 hover:text-third cursor-pointer transition-all ease-linear">John Doe</h2>
                            </div>
                            <p className="text-justify mt-auto font-montserrat font-medium">Thank you, Autobikes.ID for the excellent service. I am very satisfied with my new motorcycle.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-64 md:w-80 lg:w-96 h-full shadow-xl">
                        <div className="card-body">
                            <div className="profile mx-auto">
                                <Image src="/Profile-Testi.png" width={65} height={65} alt="User" className="rounded-full mx-auto" />
                                <h2 className="card-title font-overpass font-semibold capitalize text-center mt-2 hover:text-third cursor-pointer transition-all ease-linear">Jane Doe</h2>
                            </div>
                            <p className="text-justify mt-auto font-montserrat font-medium">I am very lucky to choose Autobikes.ID as my motorcycle dealer. My motorcycle is always in prime condition after being serviced here.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-64 md:w-80 lg:w-96 h-full shadow-xl">
                        <div className="card-body">
                            <div className="profile mx-auto">
                                <Image src="/Profile-Testi.png" width={65} height={65} alt="User" className="rounded-full mx-auto" />
                                <h2 className="card-title font-overpass font-semibold capitalize text-center mt-2 hover:text-third cursor-pointer transition-all ease-linear">Joko Doe</h2>
                            </div>
                            <p className="text-justify mt-auto font-montserrat font-medium">My motorcycle is as good as new after being serviced at Autobikes.ID. The technicians here are very professional and meticulous.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
        </main>
    )
}
