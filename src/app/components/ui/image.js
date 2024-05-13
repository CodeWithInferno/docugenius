import Image from 'next/image';

const Images = () => {
    return (
        <div className="w-full h-auto flex justify-center my-10">
            <div className="shadow-lg">
                <Image src='/A.png' className="shadow-lg" alt="Heyy" layout="fixed" width={500} height={500} />
            </div>
        </div>
    );
};

export default Images;