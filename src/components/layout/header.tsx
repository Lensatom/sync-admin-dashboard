import { Icon } from '../ui/icon'
import { Input } from '../ui/input'
import { Container } from './container'

export function Header({
  title,
  subtitle
}:{
  title: string
  subtitle: string
}) {
  return (
    <Container className='flex items-center justify-between mt-8'>
      <div>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
      <div>
        <div className='border border-gray.4 bg-white w-[380px] h-12 rounded-full px-4 flex items-center gap-3'>
          <Icon name="search" padding={0} size={16} />
          <Input className='border-none !p-0 text-sm' placeholder='Search NaijaShop' />
        </div>
      </div>
    </Container>
  )
}