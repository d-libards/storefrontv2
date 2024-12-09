import Link from 'next/link';
import { Button } from '../ui/button';
import { LuArmchair } from 'react-icons/lu';
import { VscCode } from 'react-icons/vsc';

function Logo() {
  return (
    <Button asChild size='icon'>
      <Link href='/'>
        <VscCode className='size-6' />
      </Link>
    </Button>
  );
}
export default Logo;
