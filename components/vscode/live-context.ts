"use client";

import { createContext, useContext } from "react";
import { buildFiles, type Live } from "./live";

export const LiveCtx = createContext<Live>({ files: buildFiles(null, []), gh: null, cvs: [] });
export const useLive = () => useContext(LiveCtx);
