export const securityCheckpoints: string[] = [
  "Zero-retention memory architecture",
  "AES-256 stream encryption",
  "Automatic PII/PHI redaction",
  "BAA-ready infrastructure",
];

export const nativeNamespaces: string[] = [
  "Epic FHIR API",
  "Cerner Millennium",
  "MyChart Sync",
  "HL7 v2.x Bridge",
];

export interface LogLine {
  id: string;
  timestamp: string;
  status: string;
  statusColor: string;
}

export const terminalLogLines: LogLine[] = [
  {
    id: "line1",
    timestamp: "11:22:31 PM",
    status: "CF_PARAM_ID: [OK]",
    statusColor: "#00D4FF",
  },
  {
    id: "line2",
    timestamp: "11:22:31 PM",
    status: "SYNCING_SECURE_VAULT: [ACTIVE]",
    statusColor: "#00D4FF",
  },
  {
    id: "line3",
    timestamp: "11:22:31 PM",
    status: "PII_REDACTION_NODE: [NOMINAL]",
    statusColor: "#00CF78",
  },
  {
    id: "line4",
    timestamp: "11:22:31 PM",
    status: "CF_SYNC: COMPLETE",
    statusColor: "#00CF78",
  },
];
