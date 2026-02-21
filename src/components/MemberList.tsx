import { Member } from "@/data/members";

interface MemberListProps {
  members: Member[];
  showResultCount?: boolean;
  totalCount?: number;
  onSelectMember?: (member: Member) => void;
}

const MemberList = ({ members }: MemberListProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 lg:ml-32">
      <div className="space-y-2">
        <div className="grid grid-cols-[1.4fr_0.6fr_2fr] md:grid-cols-[1fr_1fr_2fr] gap-2 md:gap-4 pl-0 pr-3 py-2 text-muted-foreground text-xs font-mono">
          <span>NAME</span>
          <span>YEAR</span>
          <span>URL</span>
        </div>
        {members.map((member) => (
          <div
            key={member.name}
            className="grid grid-cols-[1.4fr_0.6fr_2fr] md:grid-cols-[1fr_1fr_2fr] gap-2 md:gap-4 pl-0 pr-3 py-2 text-xs md:text-sm font-mono"
          >
            <span className="text-foreground break-words">{member.name}</span>
            <span className="text-muted-foreground truncate">{member.program || member.grad_year || ""}</span>
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary underline underline-offset-2 transition-colors truncate"
            >
              {member.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
