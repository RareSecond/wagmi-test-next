import { useAccount, useEnsName, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  if (isConnected) return <div>Connected to {ensName ?? address}</div>;
  return <button onClick={() => connect()}>Connect Wallet</button>;
}
