import Image from "next/image";
import { GetServerSideProps } from 'next';
import { fetchPrediction } from '../app/lib/data';
import RootLayout from "@/app/layout";
import { Inter } from "next/font/google";
import "../app/globals.css";

type HomeProps = {
  mien_bac: string;
  mien_nam: string;
  mien_trung: string;
};

const Home = (res: HomeProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Dự đoán lô đề</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Ứng dụng dự đón lô đề, áp dụng công nghệ trí tuệ nhân tạo, giúp bạn đổi đời sau 6h30</p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <span className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div className="text-center">
                        <div className="mb-1 text-xs">Miền Nam</div>
                        <div className="-mt-1 font-sans text-3xl font-semibold">{res.mien_nam}</div>
                    </div>
                </span>
                <span className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div className="text-center">
                        <div className="mb-1 text-xs">Miền Trung</div>
                        <div className="-mt-1 font-sans text-3xl font-semibold">{res.mien_trung}</div>
                    </div>
                </span>
                <span className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <div className="text-center">
                        <div className="mb-1 text-xs">Miền Bắc</div>
                        <div className="-mt-1 text-3xl font-sans font-semibold">{res.mien_bac}</div>
                    </div>
                </span>
            </div>
        </div>

      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchPrediction();
  return {
    props: {
      mien_bac: data?.mien_bac || null,
      mien_nam: data?.mien_nam || null,
      mien_trung: data?.mien_trung || null,
    },
  };
};

export default Home