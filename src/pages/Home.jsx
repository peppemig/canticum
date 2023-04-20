import Layout from "../Layout"
import ContentRow from "../components/ContentRow"

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-4 px-5 pt-20 pb-44">
                <ContentRow/>
                <ContentRow/>
                <ContentRow/>
                <ContentRow/>
                <ContentRow/>
            </div>
        </Layout>
    )
}

export default Home