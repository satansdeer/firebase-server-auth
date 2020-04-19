/// <reference types="node" />
import { Socket } from "net";
import { SubchannelAddress } from "./subchannel";
export declare function shouldUseProxy(target: string): boolean;
export declare function getProxiedConnection(target: string, subchannelAddress: SubchannelAddress): Promise<Socket>;
