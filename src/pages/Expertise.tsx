import React, {FC, useState} from 'react';
import JavaLogo from 'assets/Java_programming_language_logo.svg'
import GoLogo from 'assets/Go_Logo_Blue.svg'
import ScalaLogo from 'assets/Scala-full-color.svg'
import KotlinLogo from 'assets/Kotlin_logo_2021.svg'
import MongoDBLogo from 'assets/MongoDB_Logo.svg'
import PostgresqlLogo from 'assets/Postgresql_elephant.svg'
import ElasticsearchLogo from 'assets/Elasticsearch_logo.svg'
import CassandraLogo from 'assets/Cassandra_logo.svg'
import SparkLogo from 'assets/Apache_Spark_logo.svg'
import DatabricksLogo from 'assets/Databricks_Logo.png'
import PalantirLogo from 'assets/Palantir_Technologies_logo.svg'
import ReactLogo from 'assets/React-icon.svg'
import ReduxLogo from 'assets/Redux_Logo.png'
import TypescriptLogo from 'assets/Typescript.svg'
import AWSLogo from 'assets/Amazon_Web_Services_Logo.svg'
import GCPLogo from 'assets/Google_Cloud_logo.svg'
import AzureLogo from 'assets/Microsoft_Azure.svg'
import TerraformLogo from 'assets/Terraform_Logo.svg'
import KubernetesLogo from 'assets/Kubernetes_logo_without_workmark.svg'
import DockerLogo from 'assets/Docker_logo.svg'
import GitLabLogo from 'assets/GitLab_logo.svg'
import JenkinsLogo from 'assets/Jenkins_logo_with_title.svg'
import SpringLogo from 'assets/Spring_Framework_Logo_2018.svg'
import RabbitMQLogo from 'assets/RabbitMQ_logo.svg'
import KafkaLogo from 'assets/Apache_kafka.svg'
import FirebaseLogo from 'assets/Firebase_Logo.svg'
import GRPCLogo from 'assets/grpc.svg'
import GraphQLLogo from 'assets/GraphQL_Logo.svg'
import HTMLLogo from 'assets/HTML5_logo_and_wordmark.svg'
import CSSLogo from 'assets/CSS3_logo_and_wordmark.svg'
import TailwindCSSLogo from 'assets/Tailwind_CSS_logo.svg'

interface SkillProps {
    icon: string
}

interface TabSkills {
    tab: Tab
    skills: SkillProps[]
}

interface SkillsProps {
    tabs: TabSkills[]
}


enum Tab {
    BE = "Back End",
    FE = "Front End",
    DATA = "Data",
    DEVOPS = "DevOps"
}


const Skill: FC<SkillProps> = ({icon}) => {
    return <div
        className='shadow-md shadow-[#35c0ed] drop-shadow hover:scale-110 duration-500 bg-gray-300 items-center flex h-20 md:h-40'>
        <img className='object-scale-down p-4 mx-auto m-6 max-h-20 md:max-h-40' src={icon} alt='Java'/>
    </div>
}

const Skills: FC<SkillsProps> = ({tabs}) => {
    const [tab, setTab] = useState<Tab>(Tab.BE)
    return (<>
        <ul className='flex items-center'>
            {tabs.map(t => (
                <li key={t.tab} className={tab === t.tab ? 'font-bold text-[#35c0ed] bg-gray-700 py-4 text-xs md:text-lg' : 'bg-gray-800 py-4 text-xs md:text-base'}
                    onClick={() => setTab(t.tab)}>{t.tab}</li>))}
        </ul>

        {tabs.map(t => (
            <div key={t.tab}
                className={tab === t.tab ? 'w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-4 bg-gray-700' : 'hidden'}>
                {t.skills.map((s, i) => <Skill key={i} {...s}/>)}
            </div>))}


    </>)
}
const Expertise = () => {

    return (
        <div id='expertise' className='bg-[#0a192f] w-full height-auto min-h-screen sm:h-screen text-gray-300 pt-[80px]'>
            <div className='max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-[#35c0ed] inline'>Expertise</p>
                    <p className='py-4'>Experienced in the following technologies...</p>
                </div>

                <Skills tabs={[
                    {
                        tab: Tab.BE,
                        skills: [{icon: GoLogo}, {icon: JavaLogo}, {icon: ScalaLogo}, {icon: KotlinLogo},
                            {icon: SpringLogo}, {icon: SparkLogo}, {icon: DatabricksLogo}, {icon: PalantirLogo}]
                    },
                    {
                        tab: Tab.FE,
                        skills: [{icon: TypescriptLogo}, {icon: ReactLogo}, {icon: ReduxLogo}, {icon: GraphQLLogo},
                            {icon: HTMLLogo}, {icon: CSSLogo}, {icon: TailwindCSSLogo}]
                    },
                    {
                        tab: Tab.DATA,
                        skills: [{icon: MongoDBLogo}, {icon: PostgresqlLogo}, {icon: ElasticsearchLogo},
                            {icon: CassandraLogo}, {icon: RabbitMQLogo}, {icon: KafkaLogo}, {icon: FirebaseLogo},
                            {icon: GRPCLogo}]
                    },
                    {
                        tab: Tab.DEVOPS,
                        skills: [{icon: AWSLogo}, {icon: GCPLogo}, {icon: AzureLogo}, {icon: TerraformLogo},
                            {icon: KubernetesLogo}, {icon: DockerLogo}, {icon: GitLabLogo}, {icon: JenkinsLogo}]
                    }
                ]}/>

            </div>
        </div>
    );
};

export default Expertise;