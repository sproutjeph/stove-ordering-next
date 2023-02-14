import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";

import { getFocusableElements, nextFocus, usePortal } from "@/utils/modalUtils";

const Frame: React.FC<{
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  open?: boolean;
  children?: JSX.Element;
}> = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onClose,
  open = true,
}) => {
  const portal = usePortal();
  const previousFocus = useRef<HTMLElement | null>(null);

  // close on click outside
  const container = useRef<HTMLDivElement>(null);
  const onOverlayClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };

  // close on esc
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "Escape": {
          if (closeOnEsc) onClose();
          break;
        }
        case "Tab": {
          e.preventDefault();
          nextFocus(getFocusableElements(container.current), !e.shiftKey);
          break;
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeOnEsc, onClose, open]);

  useEffect(() => {
    // aria-hidden
    document
      .getElementById("root")
      ?.setAttribute("aria-hidden", open.toString());
    portal!.current?.setAttribute("aria-hidden", (!open).toString());

    if (open) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocus(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [open, portal]); // note: when importing, eslint doesn't recognise that portal is a ref, so it doesn't need to be in the deps array

  if (portal.current === null) return null; // this is a workaround for the fact that the portal is created in a useEffect, so it may not be available immediately (and the linter doesn't like it when you don't return anything
  return ReactDOM.createPortal(
    // transparent overlay: `inset-0` to stretch over the entire screen (combines`top-0`, `right-0`, `bottom-0`, and `left-0`)
    <div
      className={classNames(
        "fixed inset-0 z-50 py-6 px-4 text-white bg-gray-600/90 mb-10 overflow-scroll",
        `${open ? "visible" : "invisible"}` // control visibility via `open` attribute (or render conditionally)
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
    >
      {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
      <div
        className="relative w-full max-w-3xl mx-auto mt-1 mb-2"
        ref={container}
      >
        {/* contents */}
        <div className="overflow-hidden bg-gray-800 rounded shadow-xl">
          {children}
        </div>
        {/* closer in the corner */}
        <button
          className="absolute flex justify-center w-8 h-8 bg-gray-600 border-2 border-gray-600 rounded-full shadow-xl outline-none cursor-pointer -top-2 -right-2 focus:border-blue-300"
          onClick={() => onClose()}
          title="close"
        >
          <span className="text-2xl leading-6 select-none">&times;</span>
        </button>
      </div>
    </div>,
    portal.current!
  );
};

const Head = ({ children }: { children: JSX.Element }) => (
  <div className="block px-4 py-2 text-center">{children}</div>
);

const Body = ({ children }: { children: JSX.Element }) => (
  <div className="w-auto h-auto p-4 text-black bg-white">{children}</div>
);

export const Modal = { Frame, Head, Body };
