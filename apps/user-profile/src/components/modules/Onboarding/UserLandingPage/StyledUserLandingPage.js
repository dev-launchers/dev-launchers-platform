import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: white;
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
`;

export const BannerContainer = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 150px;
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OnboardingContainer = styled.div`
  width: 578px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  padding-bottom: 150px;
  padding-top: 32px;
`;

export const UploadButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 255px;
  width: 32px;
  height: 32px;
  transform: translate(50%, 50%);
  background-color: white;
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  position: relative;
`;

export const UploadedProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 24px;
`;

export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 134px;
  height: 100%;
`;
