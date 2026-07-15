import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer"
import { band, press, streaming, events, contact, type BandEvent } from "@/lib/site"

const CRIMSON = "#b23a2e"
const INK = "#1c1a19"
const MUTED = "#6b6560"
const LINE = "#d9d4cf"

const styles = StyleSheet.create({
  page: { paddingVertical: 40, paddingHorizontal: 48, fontFamily: "Helvetica", color: INK, fontSize: 10, lineHeight: 1.5 },
  eyebrow: { fontFamily: "Helvetica-Bold", fontSize: 8, letterSpacing: 2, color: CRIMSON, textTransform: "uppercase" },
  title: { fontFamily: "Helvetica-Bold", fontSize: 34, letterSpacing: 1, textTransform: "uppercase", marginTop: 6 },
  tagline: { fontSize: 10, letterSpacing: 2, color: MUTED, textTransform: "uppercase", marginTop: 6 },
  image: { width: "100%", height: 220, objectFit: "cover", marginTop: 16, borderRadius: 2 },
  credit: { fontSize: 7, color: MUTED, marginTop: 4, fontStyle: "italic" },
  sectionTitle: { fontFamily: "Helvetica-Bold", fontSize: 14, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 },
  section: { marginTop: 22 },
  para: { color: "#3a3632", marginBottom: 8, textAlign: "justify" },
  divider: { borderBottomWidth: 1, borderBottomColor: LINE, marginVertical: 4 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: LINE },
  rowLabel: { fontFamily: "Helvetica-Bold", fontSize: 10, textTransform: "uppercase" },
  rowValue: { fontSize: 9, color: MUTED },
  eventDate: { fontFamily: "Helvetica-Bold", color: CRIMSON, width: 60, fontSize: 10 },
  eventVenue: { fontFamily: "Helvetica-Bold", fontSize: 10, textTransform: "uppercase" },
  contactBox: { borderWidth: 1, borderColor: LINE, padding: 12, marginTop: 8 },
  contactPrimary: { borderColor: CRIMSON },
  contactName: { fontFamily: "Helvetica-Bold", fontSize: 12, textTransform: "uppercase", marginTop: 4 },
  contactEmail: { color: CRIMSON, marginTop: 6, fontSize: 10 },
  footer: { position: "absolute", bottom: 24, left: 48, right: 48, flexDirection: "row", justifyContent: "space-between", fontSize: 7, color: MUTED, borderTopWidth: 1, borderTopColor: LINE, paddingTop: 8 },
})

function fmtDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`)
  return d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).toUpperCase()
}

function statusText(status: BandEvent["status"]) {
  if (status === "sold-out") return "Sold Out"
  if (status === "info-tba") return "More Info TBA"
  if (status === "announced") return "Announced"
  return "Tickets Available"
}

export function EpkDocument({ photo }: { photo?: Buffer }) {
  return (
    <Document title={`${band.name} — Press Kit`} author={band.name}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.eyebrow}>Electronic Press Kit</Text>
        <Text style={styles.title}>{band.name}</Text>
        <Text style={styles.tagline}>
          {band.tagline} · {band.location}
        </Text>

        {photo && <Image style={styles.image} src={{ data: photo, format: "jpg" }} />}
        {press.bandPhoto.credit && <Text style={styles.credit}>{press.bandPhoto.credit}</Text>}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Biography</Text>
          {press.bio.map((p, i) => (
            <Text key={i} style={styles.para}>
              {p}
            </Text>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Music &amp; Streaming</Text>
          {streaming.map((s) => (
            <View key={s.name} style={styles.row}>
              <Text style={styles.rowLabel}>{s.name}</Text>
              <Text style={styles.rowValue}>{s.url}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Upcoming Shows</Text>
          {events.slice(0, 3).map((e) => (
            <View key={`${e.date}-${e.venue}`} style={styles.row}>
              <Text style={styles.eventDate}>{fmtDate(e.date)}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.eventVenue}>{e.venue}</Text>
                <Text style={styles.rowValue}>{e.city}</Text>
              </View>
              <Text style={styles.rowValue}>{statusText(e.status)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={[styles.contactBox, styles.contactPrimary]}>
            <Text style={styles.eyebrow}>Booking · Primary Contact</Text>
            <Text style={styles.contactName}>{contact.bookingAgency}</Text>
            <Text style={styles.contactEmail}>{contact.bookingEmail}</Text>
          </View>
          <View style={styles.contactBox}>
            <Text style={styles.eyebrow}>Everything Else</Text>
            <Text style={styles.contactName}>The Band</Text>
            <Text style={styles.contactEmail}>{contact.bandEmail}</Text>
            <Text style={styles.rowValue}>
              {contact.instagramHandle} (Instagram) · {contact.tiktokHandle} (TikTok)
            </Text>
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text>
            {band.name} — {band.tagline}
          </Text>
          <Text>{contact.bookingEmail}</Text>
        </View>
      </Page>
    </Document>
  )
}
