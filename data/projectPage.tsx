import fs from 'fs'
import { ReactNode } from "react"
import { join } from "path"
import matter from 'gray-matter'
import remarkMdx from 'remark-mdx'
import { remark } from 'remark'

export interface ProjectData {
    slug?: string,
    title: string,
    screenshots: string[],
    shortDescription: string,
    inProgress: boolean,
    technologies: string[],
    year: Number
}


const projectsDirectory = join(process.cwd(), '_projects')



export const getProjectBySlug = (slug: string) => {
    const fullPath = join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);
    console.log({ data, content })
    return { data, content };
}

export const getProjectBySlugTest = (slug: string) => {
    const fullPath = join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const t = remark()
        .use(remarkMdx)
        .parse(fileContents)
    console.log
    return t;
}


export const getProjectData = (filePath: string) => {
    const slug = filePath.replace(/\.mdx?$/, "");
    // get the front matter data and content
    const { data, content } = getProjectBySlug(slug);
    data.slug = slug

    return data as ProjectData
}


export const getProjectSlugs = () => {
    const paths = fs.readdirSync(projectsDirectory).filter((path) => /\.mdx?$/.test(path))

    const slugs = paths.map((path) => path.replace(/\.mdx?$/, ""))
    return slugs
}

export const getAllProjects = () => {
    // add paths for getting all projects 
    const filePaths = fs.readdirSync(projectsDirectory).filter((path) => /\.mdx?$/.test(path));
    // get the projects from the filepaths with the needed fields sorted by date
    const projects = filePaths.map((filePath) => getProjectData(filePath)).sort((post1, post2) => post1.year < post2.year ? 1 : -1);
    // return the available post
    return projects;
}



