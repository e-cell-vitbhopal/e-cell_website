import { useState } from 'react';
import classNames from 'classnames';
import '../../styles/team-styles/TeamCarousel.css';

export default function TeamCarousel({ members, carouselId }) {
    const [selectedMember, setSelectedMember] = useState(1);

    const getCardPosition = (memberId) => {
        if (selectedMember === memberId) return 'card-center';
        if (
            (selectedMember === 1 && memberId === 3) ||
            (selectedMember === 2 && memberId === 1) ||
            (selectedMember === 3 && memberId === 2)
        ) return 'card-left';
        return 'card-right';
    };

    return (
        <div className="container-teams">
            <div className="cards">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className={classNames('card', getCardPosition(member.id))}
                        onClick={() => setSelectedMember(member.id)}
                        role="button"
                        tabIndex={0}
                    >
                        <img src={member.image} alt={member.name} />
                    </div>
                ))}
            </div>

            <div className="info-card">
                {members.map((member) => (
                    selectedMember === member.id && (
                        <div key={member.id} className="member-info  ">
                            <div className="role">{member.role}</div>
                            <div className="name">{member.name}</div>
                            <div className="description">{member.description}</div>
                            <div className="contact-info">
                                <span>

                                    {member.email}
                                </span>
                                <span>

                                    {member.phone}
                                </span>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}