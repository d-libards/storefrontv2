import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function ImageInput() {
  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Image
      </Label>
      <Input name={name} id={name} type='file' required accept='image/*' />
    </div>
  );
}
export default ImageInput;
