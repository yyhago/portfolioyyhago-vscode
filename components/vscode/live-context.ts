"use client";

import { createContext, useContext } from "react";
import { pick, type Locale } from "../i18n";
import { buildFiles, type Live } from "./live";

export const LiveCtx = createContext<Live>({ files: buildFiles(null, []), gh: null, cvs: [] });
export const useLive = () => useContext(LiveCtx);

export const LocaleCtx = createContext<{ locale: Locale; setLocale: (l: Locale) => void }>({ locale: "pt", setLocale: () => {} });
export const useLocale = () => useContext(LocaleCtx);
export const useL = () => pick(useContext(LocaleCtx).locale);
