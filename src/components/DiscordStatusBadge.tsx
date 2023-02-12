import { useLanyard } from "use-lanyard";
import { classNames } from "../util/ui";

// thanks trobo :P https://github.com/trobonox/trobo.tech/blob/main/src/components/DiscordStatus.vue

const DiscordStatusBadge: React.FC<{
  discordID: string;
  dndIsOnline: boolean;
}> = ({ discordID, dndIsOnline }) => {
  // TODO: real-time & batching
  const data = useLanyard(discordID as `${bigint}`, {
    api: {
      hostname: "lanyard.fyralabs.com",
      secure: true,
    },
  });
  const status = data?.data?.discord_status ?? "Unknown";

  return (
    <span
      data-text={"Discord Status: " + status}
      className={classNames(
        "tooltip w-8 h-8 rounded-full border-4 absolute right-4 bottom-0.5",
        status === "online" || (dndIsOnline && status === "dnd")
          ? "bg-emerald-500 border-emerald-600"
          : status === "idle"
          ? "bg-yellow-500 border-yellow-600"
          : status === "dnd"
          ? "bg-red-500 border-red-600"
          : "bg-gray-500 border-gray-600"
      )}
    />
  );
};

export default DiscordStatusBadge;
