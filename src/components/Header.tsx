import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <nav>
        <Link href="/">
          <A>lol-skins</A>
        </Link>
      </nav>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #161819;
`

const A = styled.a`
  cursor: pointer;
  font-size: 18px;
`