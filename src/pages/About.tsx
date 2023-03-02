import React from 'react';

const About = () => {
    return (
        <div id='about' className='bg-gray-700 w-full height-auto min-h-screen sm:h-screen text-gray-300 pt-[80px]'>
            <div className='flex flex-col justify-center h-full items-center w-full h-full'>
                <div className='max-w-[950px]  w-full px-4 grid grid-cols-3 gap-8'>
                    <div className='md:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#35c0ed]'>About</p>
                    </div>
                </div>
                <div className='max-w-[950px] w-full px-4 grid md:grid-cols-3 gap-8'>
                    <div className='md:text-right text-2xl font-bold'>
                        <p>
                            Specialising in Golang and Java development, but consider myself a polyglot, I am expert in
                            a wide range of languages and technologies with a wealth of experience across the software
                            development lifecycle.
                        </p>
                    </div>
                    <div className='md:col-span-2'>
                        <ul className="list-disc flex flex-col space-y-2 pl-4">
                            <li>SOLID/Clean developer</li>
                            <li>Golang, Java, Kotlin, Typescript and Python API Applications</li>
                            <li>Scala and Python Spark applications</li>
                            <li>gRPC microservice architectures</li>
                            <li>REST and federated GraphQL APIs</li>
                            <li>React and Redux UIs</li>
                            <li>Event and Data Streaming with Kafka, RabbitMQ, Google PubSub</li>
                            <li>MongoDB, Firestore and multiple relational SQL databases</li>
                            <li>Lucene Search technologies such as Elasticsearch</li>
                            <li>Infrastructure as code/containerisation. Terraform, Helm and Kubernetes</li>
                            <li>Experience with all major cloud providers. AWS, GCP and Azure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;