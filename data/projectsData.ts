interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Sitekick Remastered',
    description: `Sitekick, a game by YTV & Corus Entertainment for YTV.com, debuted in 2003 and was discontinued in 2015. The Sitekick Remastered initiative seeks to conserve its legacy while enhancing the original game.`,
    imgSrc: '/static/images/sitekick.png',
    href: '/blog/sitekick-remastered',
  },
  {
    title: 'Placeholder',
    description: `Placeholder`,
    imgSrc: '',
    href: 'Placeholder',
  },
]

export default projectsData
