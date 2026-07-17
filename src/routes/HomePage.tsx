import Page from '@components/page'

const HomePage = () => {
  return (
    <Page title="Home">
      <div className="flex justify-center mt-12 sm:mt-0 sm:h-full">
        <div className="flex flex-col justify-center h-full gap-6 mt-auto text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl sm:mx-5 md:mx-10 lg:mx-20">
          <div className="text-6xl sm:text-7xl md:text-8xl">
            Hello, I’m <span className="highlight-blue-gradient">Tino Tom</span>!
          </div>
          <br />
          <div>
            First class{' '}
            <span className="highlight-blue-gradient">Computer Science</span>{' '}
            graduate and{' '}
            <span className="highlight-blue-gradient">Frontend Engineer</span>{' '}
            specializing in React, TypeScript, and modern UI architecture.
          </div>
          <div>
            Experienced in driving engineering ownership — from migrating design
            systems and optimizing complex state management to building automated
            end-to-end testing pipelines with{' '}
            <span className="highlight-blue-gradient">Playwright</span>. Adept at
            streamlining frontend delivery via modern{' '}
            <span className="highlight-blue-gradient">CI/CD</span> pipelines while
            maintaining full-stack autonomy.
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomePage
