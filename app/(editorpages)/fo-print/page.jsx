'use client'
import Button from '@/components/Button';


const Page = () => {
  // const supabase = createServerComponentClient({ cookies });

  // if (!data) return <div>Loading...</div>
  // const dep = data[0];


  return (
    <div className="">
      <h1 className='text-6xl font-universHeading'>Printable Documents by Brand</h1>
      <div className="flex flex-col flex-wrap justify-around gap-4 mt-8 max-h-64">
        <Button href={'/fo-print/all'}>All Clinics</Button>
        <Button href={'/fo-print/advent'}>Advent</Button>
        <Button href={'/fo-print/armor'}>Armor</Button>
        <Button href={'/fo-print/bim'}>Back in Motion</Button>
        <Button href={'/fo-print/biocorrect'}>Biocorrect</Button>
        <Button href={'/fo-print/border'}>Border Therapy Services</Button>
        <Button href={'/fo-print/continuum'}>Continuum Wellness</Button>
        <Button href={'/fo-print/covid'}>COVID Resources</Button>
        <Button href={'/fo-print/excel'}>Excel Sports and Physical Therapy</Button>
        <Button href={'/fo-print/franklin'}>Franklin Rehabilitation</Button>
        <Button href={'/fo-print/panther'}>Panther Physical Therapy</Button>
        <Button href={'/fo-print/peak'}>Peak Performance Physical Therapy</Button>
        <Button href={'/fo-print/ra'}>Rehab Access</Button>
        <Button href={'/fo-print/sol'}>SOL</Button>
        <Button href={'/fo-print/ssor'}>SSOR</Button>
        <Button href={'/fo-print/whatcom'}>Whatcom</Button>

      </div>
    </div>
  );

}

export default Page