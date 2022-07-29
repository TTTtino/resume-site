import 'react-responsive-carousel/lib/styles/carousel.min.css'
import type { GetStaticProps, GetStaticPaths } from "next";
import Page from "@components/page";
import { getProjectBySlug, getProjectSlugs, ProjectData } from "@data/projectPage"
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize'
import { ProjectLayout } from '@components/projectLayout';
import { ParsedUrlQuery } from 'querystring';

interface ProjectPageProps {
    source: MDXRemoteSerializeResult,
    frontMatter: ProjectData
}



const ProjectPage = (props: ProjectPageProps) => {
    return (
        <Page title={props.frontMatter.title}>
            <ProjectLayout source={props.source} meta={props.frontMatter} />
        </Page>
    )
};

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as Iparams
    const { content, data } = getProjectBySlug(slug)

    const mdxSource = await serialize(content, { scope: data })

    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    const slugs = getProjectSlugs()

    const paths = slugs.map((slug: string) => ({
        params: {
            slug: slug
        }
    }))

    return { paths, fallback: false }
}


export default ProjectPage;
