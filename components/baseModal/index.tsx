import { FC, ElementType } from "react";
import { VscClose } from "react-icons/vsc";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineDownload, AiOutlineUserAdd } from "react-icons/ai";
import Button, { ButtonTypes } from "components/button";

export type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  TitleIcon?: ElementType;
  footerActions?: { type: string; action: any }[];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const BaseModal: FC<BaseModalProps> = ({ open, onClose, title, TitleIcon, footerActions, children }) => {
  const footerIcons = {
    yes: { title: "yes", icon: <BsCheckCircle size={24} /> },
    no: { title: "no", icon: <AiOutlineCloseCircle size={24} /> },
    ok: { title: "ok", icon: <BsCheckCircle size={24} /> },
    save: { title: "save", icon: <BsCheckCircle size={24} /> },
    draft: { title: "draft", icon: <BsCheckCircle size={24} /> },
    update: { title: "update", icon: <BsCheckCircle size={24} /> },
    close: { title: "close", icon: <AiOutlineCloseCircle size={24} /> },
  };
  return (
    <>
      {open && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  {TitleIcon && <TitleIcon />}
                  <span className="text-xl font-semibold ml-2">{title}</span>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                    type="button"
                  >
                    <VscClose />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">{children}</div>
                {/*footer*/}

                {footerActions && (
                  <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                    {footerActions.map((item, index) => {
                      const { type, action } = item;
                      const iconInfo = (footerIcons as any)[type];
                      return (
                        <div key={index}>
                          {type.toLowerCase() !== "close" ? (
                            <Button type={ButtonTypes.Submit} btnSize="w-40 ml-4" onClick={action}>
                              {iconInfo.title.toUpperCase()}
                            </Button>
                          ) : (
                            <button
                              className={`${
                                type.toLocaleLowerCase() === "close" ? "text-red-500" : "text-gray-600"
                              } background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                              onClick={action}
                              type="button"
                            >
                              {iconInfo.title}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default BaseModal;
