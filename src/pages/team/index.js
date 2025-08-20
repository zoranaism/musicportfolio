import React, {Fragment, useState} from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateTeamPage from "../../templates/team";
import FooterTwo from "../../components/footer/FooterTwo";

import teamMembers from '../../data/team';

const TeamPage = () => {
    const [teamPerPage, setTeamPerPage] = useState(3);
    const [loading, setLoading] = useState(false);
    const teams = teamMembers.slice(0, teamPerPage);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setTeamPerPage(teamPerPage + 3);
            setLoading(false);
        }, 200);
    };

    const allItems = teamPerPage >= teamMembers.length;


    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateTeamPage teams={teams} loading={loading}/>
            <FooterTwo loadHandler={loadMore} allItems={allItems} />
        </Fragment>
    );
};

export default TeamPage;