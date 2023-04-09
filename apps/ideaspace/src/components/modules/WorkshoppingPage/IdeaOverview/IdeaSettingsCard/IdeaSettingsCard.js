import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaSettingsContent from './IdeaSettingsContent';
import useConfirm from '../../../../common/DialogBox/DialogBox';
import theme from '@devlaunchers/components/styles/theme';

const IdeaSettingsCard = ({ card }) => {
    let { userData, setUserData, isAuthenticated } = useUserDataContext();
    if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
        React.useEffect(() => {
            setUserData({ ...userData, id: 30 });
        }, []);
    }

    const router = useRouter();
    const [cardStatus, setCardStatus] = useState(card.status);
    const [disabling, setDisabling] = useState(false);
    const [archiveButtonText, setArchiveButtonText] = useState("ARCHIVE");
    const [reactiveButtonText, setReactiveButtonText] = useState("REACTIVE");
    const [deleteButtonText, setDeleteButtonText] = useState("DELETE");

    React.useEffect(() => {
        if (card.status == "archived") {
            setDisabling(true);
        }
    }, []);

    const [ArchiveIdea, confirmArchive] = useConfirm(
        ["Archive your idea", '', ''],
        'This action will pause your idea and you can reactivate it via your dashboard.',
        ['primary alternative', 'archive', 'cancel'],
    );

    const [ArchiveFailure, confirmArchiveFailure] = useConfirm(
        ['Unable to archive your idea', '', ''],
        'Please try again.',
        ['primary', 'close'],
    );

    const [ArchiveSuccess, confirmArchiveSuccess] = useConfirm(
        ['You idea was archived successfully', 'Success', ''],
        'Your idea is archived and it can be reactivated anytime via your dashboard.',
        ['alternative primary', 'browse ideas', 'dashboard'],
    );

    const [ReactivateFailure, confirmReactivateFailure] = useConfirm(
        ['Unable to reactivate your idea', '', ''],
        'Please try again.',
        ['primary', 'close'],
    );

    const [DeleteIdea, confirmDelete] = useConfirm(
        ["You are about to delete your Idea", 'Error', theme.colors.ERROR_500],
        "This action can't be undone! Are you sure you want to proceed?",
        ['primary alternative', 'delete', 'cancel'],
    );

    const [DeleteFailure, confirmDeleteFailure] = useConfirm(
        ['Unable to delete your idea', '', ''],
        'Please try again.',
        ['primary', 'close'],
    );

    const [DeleteSuccess, confirmDeleteSuccess] = useConfirm(
        ['You idea was deleted successfully', 'Success', ''],
        'Your idea workshopping page is no longer accessible.',
        ['alternative primary', 'browse ideas', 'submit new idea'],
    );

    const clickEdit = () => {
        router.push(`/ideaspace/edit/${card.id}`);
    }

    const clickArchive = async () => {
        setCardStatus(card["status"]);
        if (await confirmArchive()) {
            card["status"] = "archived";
            setArchiveButtonText(`WAIT`);

            try {
                const res = await axios.put(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${card.id}`,
                    card
                );

                if (res.status === 200) {
                    setArchiveButtonText(`ARCHIVE`);
                    setDisabling(true);
                    if (await confirmArchiveSuccess()) {
                        router.push(`/ideaspace/dashboard`);
                    } else {
                        router.push(`/ideaspace/browse`);
                    }
                }
            } catch (error) {
                card["status"] = cardStatus;
                confirmArchiveFailure();
                setArchiveButtonText(`ARCHIVE`);
            }
        }
    }

    const clickReactivate = async () => {
        card["status"] = "workshopping";
        setReactiveButtonText(`WAIT`);

        try {
            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${card.id}`,
                card
            );

            if (res.status === 200) {
                setReactiveButtonText(`REACTIVE`);
                setDisabling(false);
            }
        } catch (error) {
            card["status"] = "archived";
            confirmReactivateFailure();
            setReactiveButtonText(`REACTIVE`);
        }
    }

    const clickDelete = async () => {
        setCardStatus(card["status"]);
        if (await confirmDelete()) {
            card["status"] = "deleted";
            setDeleteButtonText(`WAIT`);

            try {
                const res = await axios.put(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${card.id}`,
                    card
                );
                if (res.status === 200) {
                    setDeleteButtonText(`DELETE`);
                    if (await confirmDeleteSuccess()) {
                        router.push(`/ideaspace/submit`);
                    } else {
                        router.push(`/ideaspace/browse`);
                    }
                }
            } catch (error) {
                card["status"] = cardStatus;
                confirmDeleteFailure();
                setDeleteButtonText(`DELETE`);
            }
        }
    }

    if (card.author.id !== userData.id) {
        return null;
    }

    return (
        <atoms.Layer type="light" style={{ borderRadius: "1rem", margin: "3rem 0", padding: "1rem 2rem 2rem" }}>
            <atoms.Box >
                <h3>Idea settings</h3>
            </atoms.Box>

            <IdeaSettingsContent
                settingLabel="Edit Idea"
                settingText="Want to modify the content of your idea?"
                buttonText="EDIT"
                buttonFunction={clickEdit}
                disabling={disabling}
            />
            <hr />
            {card.status == "archived" ?
                <IdeaSettingsContent
                    settingLabel="Reactivate Idea"
                    settingText="This action will reactivate your idea."
                    buttonText={reactiveButtonText}
                    buttonFunction={clickReactivate}
                />
                :
                <IdeaSettingsContent
                    settingLabel="Archive Idea"
                    settingText="This action will make your idea read-only."
                    buttonText={archiveButtonText}
                    buttonFunction={clickArchive}
                />
            }

            <hr />
            <IdeaSettingsContent
                settingLabel="Delete Idea"
                settingText="This action will delete your idea permanently."
                buttonText={deleteButtonText}
                buttonFunction={clickDelete}
                buttonColor={theme.colors.ERROR_500}
            />

            <ArchiveIdea />
            <ArchiveFailure />
            <ArchiveSuccess />

            <ReactivateFailure />

            <DeleteIdea />
            <DeleteFailure />
            <DeleteSuccess />
        </atoms.Layer>
    );
};

export default IdeaSettingsCard;