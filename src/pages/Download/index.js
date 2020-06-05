import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaDownload, FaShare, FaBan } from "react-icons/fa";

// Components
import Logo from "../../components/Logo";
import Loading from "../../components/Loading";

import api from "../../services/api";
import bytesToSize from "../../config/bytesToSize";
import CopyToClipboard from "react-copy-to-clipboard";

import {
  Content,
  Header,
  DownloadContainer,
  DownloadContent,
  Title,
  Text,
  Button,
  ImageContainer,
} from "./styles";

export default function Signup() {
  const [file, setFile] = useState("");
  const [author, setAuthor] = useState("");
  const [copied, setCopied] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    async function loadFile() {
      await api.get(`/info/${id}`).then((response) => {
        setAuthor(response.data.author);
        setFile(response.data.file);
      });
    }

    loadFile();
  }, [id]);

  async function handleDownloadFile() {
    await api.post(`/info/download/${file._id}`).then(() => {
      return (window.location.href = file.url);
    });
  }

  async function handleCopyToClipboard() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  return (
    <>
      {copied && <Header>Copied to the clipboard.</Header>}
      <Content>
        {file.size ? (
          <DownloadContainer>
            <Logo />
            <br />
            <DownloadContent>
              <div
                className="author"
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  src={author.picture_url}
                  alt="Author"
                  width="50"
                  height="50"
                  style={{ borderRadius: "50%" }}
                />
                <p>{author.first_name}</p>
              </div>
              <br />
              <Text>TITLE</Text>
              <strong
                style={{ textTransform: "uppercase", wordBreak: "break-all" }}
              >
                {file.originalname}
              </strong>
              <br />
              <Text>SIZE</Text>
              <strong
                style={{ textTransform: "uppercase", wordBreak: "break-all" }}
              >
                {bytesToSize(file.size)}
              </strong>
              <br />
              <Text>MIMETYPE</Text>
              <strong
                style={{ textTransform: "uppercase", wordBreak: "break-all" }}
              >
                {file.type}
              </strong>
              <br />
              <Button onClick={handleDownloadFile}>DOWNLOAD</Button>

              <div
                className="footer"
                style={{
                  margin: "15px 0",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaDownload size="18px" color="#888888" />
                  &nbsp;
                  <p style={{ color: "#888888" }}>{file.downloads}</p>
                </div>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                ></button>
                <CopyToClipboard
                  text={document.URL}
                  onCopy={handleCopyToClipboard}
                >
                  <FaShare style={{ cursor: "pointer" }} color="#886688" />
                </CopyToClipboard>
              </div>
            </DownloadContent>
          </DownloadContainer>
        ) : (
          <Loading />
        )}
        <ImageContainer>
          <div className="text">
            <Title>How can I download something safely ?</Title>
            <br />
            <Text>
              <strong>Use a reliable antivirus</strong>
              <br />
              <em>
                - The most complete software in this field has a specific tool
                for downloads, which is able to inspect the downloaded files
                before they can infect the computer, in case they carry a virus.
              </em>
            </Text>
            <br />
            <Text>
              <strong>Official links</strong>
              <br />
              <em>
                - The most complete software in this field has a specific tool
                for downloads, which is able to inspect the downloaded files
                before they can infect the computer, in case they carry a virus.
              </em>
            </Text>
          </div>
        </ImageContainer>
      </Content>
    </>
  );
}
