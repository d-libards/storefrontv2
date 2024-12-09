import { Separator } from '@/components/ui/separator';
import Sidebar from './Sidebar';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className='text-2xl pl-3'>Dashboard</h2>
      <Separator className='mt-2' />
      <section className='grid md:grid-cols-12 gap-12 mt-12'>
        <div className='lg:col-span-2 md:col-span-3'>
          <Sidebar />
        </div>
        <div className='lg:col-span-10 md:col-span-9 px-4'>{children}</div>
      </section>
    </>
  );
}
export default DashboardLayout;