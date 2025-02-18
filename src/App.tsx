import Game from './components/Game.tsx';

import { ToastContainer } from 'react-toastify';
import starImg from '../assets/star.svg';
import helpImg from '../assets/help.svg';
// import { UserButton } from '@clerk/clerk-react';
// import { Authenticated, Unauthenticated } from 'convex/react';
// import LoginButton from './components/buttons/LoginButton.tsx';
import { useState } from 'react';
import ReactModal from 'react-modal';
import MusicButton from './components/buttons/MusicButton.tsx';
import Button from './components/buttons/Button.tsx';
import InteractButton from './components/buttons/InteractButton.tsx';
import FreezeButton from './components/FreezeButton.tsx';
import { MAX_HUMAN_PLAYERS } from '../convex/constants.ts';

export default function Home() {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between font-sans game-background">
      <ReactModal
        isOpen={helpModalOpen}
        onRequestClose={() => setHelpModalOpen(false)}
        style={modalStyles}
        contentLabel="Help modal"
        ariaHideApp={false}
      >
        <div className="font-body">
          <h1 className="text-center text-6xl font-bold font-display game-title">Help</h1>
          <p>
            欢迎来到AI小镇。AI小镇支持匿名<i>观众</i>和登录<i>互动</i>。
          </p>
          <h2 className="text-4xl mt-4">观众</h2>
          <p>
            点击并拖动以移动小镇，滚动以缩放。你可以点击个人角色查看其聊天记录。
          </p>
          <h2 className="text-4xl mt-4">互动</h2>
          <p>
            如果你登录，你可以加入模拟并直接与不同的角色交谈！登录后，点击"互动"按钮，你的角色会在地图上出现一个高亮圈。
          </p>
          <p className="text-2xl mt-2">操作:</p>
          <p className="mt-4">点击以移动。</p>
          <p className="mt-4">
            要与一个角色交谈，点击他们，然后点击"开始对话"，这将要求他们开始走向你。一旦他们靠近，对话将开始，你可以互相交谈。你可以随时通过关闭对话窗或离开来离开。他们可能会向你提出对话 - 你会在消息面板中看到一个接受按钮。
          </p>
          <p className="mt-4">
            AI小镇只支持{MAX_HUMAN_PLAYERS}个角色同时在线。如果你五分钟没有操作，你将被自动移除。
          </p>
        </div>
      </ReactModal>
      {/*<div className="p-3 absolute top-0 right-0 z-10 text-2xl">
        <Authenticated>
          <UserButton afterSignOutUrl="/ai-town" />
        </Authenticated>

        <Unauthenticated>
          <LoginButton />
        </Unauthenticated>
      </div> */}

      <div className="w-full h-screen relative isolate overflow-hidden flex flex-col">
        <h1 className="mx-auto text-2xl p-2 sm:text-4xl lg:text-5xl font-bold font-sans leading-none w-full text-left sm:text-center sm:w-auto text-orange-400">
          迷你世界AI小镇
        </h1>

        <div className="max-w-xs md:max-w-xl lg:max-w-none mx-auto my-2 text-center text-base sm:text-lg md:text-xl text-white leading-tight shadow-solid">
          一个虚拟的小镇，AI角色在这里生活、聊天和社交。
          {/* <Unauthenticated>
            <div className="my-1.5 sm:my-0" />
            Log in to join the town
            <br className="block sm:hidden" /> and the conversation!
          </Unauthenticated> */}
        </div>

        <div className="flex-grow overflow-hidden">
          <Game />
        </div>

        <footer className="justify-end w-full flex items-center gap-1 p-1 flex-wrap">
          <div className="flex gap-1 flex-grow">
            <FreezeButton />
            <MusicButton />
            {/* <Button href="https://github.com/a16z-infra/ai-town" imgUrl={starImg}>
              Star
            </Button> */}
            <InteractButton />
            <Button imgUrl={helpImg} onClick={() => setHelpModalOpen(true)}>
              帮助
            </Button>
          </div>
        </footer>
        <ToastContainer position="bottom-right" autoClose={2000} closeOnClick theme="dark" />
      </div>
    </main>
  );
}

const modalStyles = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 75%)',
    zIndex: 12,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50%',

    border: '10px solid rgb(23, 20, 33)',
    borderRadius: '0',
    background: 'rgb(35, 38, 58)',
    color: 'white',
    fontFamily: '"Upheaval Pro", "sans-serif"',
  },
};
